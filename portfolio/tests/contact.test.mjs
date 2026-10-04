import test from "node:test";
import assert from "node:assert/strict";
import { sendContact } from "../src/lib/contact.js";

const config = {
  service: "test-service",
  template: "test-template",
  publicKey: "test-public",
};
test("missing configuration rejects before loading or sending", async () => {
  let loaded = false;
  await assert.rejects(
    sendContact({}, {}, async () => {
      loaded = true;
    }),
    /configuration missing/,
  );
  assert.equal(loaded, false);
});
test("configured transport preserves form and original template field contract", async () => {
  const form = {
    name: "Sample",
    email: "test@example.com",
    message: "Test message",
  };
  const loadClient = async () => ({
    default: {
      sendForm: async (...args) => {
        assert.deepEqual(args, [
          "test-service",
          "test-template",
          form,
          { publicKey: "test-public" },
        ]);
        return { status: 200 };
      },
    },
  });
  assert.deepEqual(await sendContact(form, config, loadClient), {
    status: 200,
  });
});
test("delivery errors propagate so UI preserves the message and offers retry", async () => {
  const failure = new Error("delivery failed");
  const loadClient = async () => ({
    default: {
      sendForm: async () => {
        throw failure;
      },
    },
  });
  await assert.rejects(
    sendContact({}, config, loadClient),
    (error) => error === failure,
  );
});
