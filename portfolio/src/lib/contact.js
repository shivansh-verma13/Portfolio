export const contactConfig = {
  service: import.meta.env?.VITE_EMAILJS_SERVICE_ID,
  template: import.meta.env?.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env?.VITE_EMAILJS_PUBLIC_KEY,
};

// Load the transport only when a visitor submits; preserve the original
// template field names (name, email, message). Never use private keys here.
export async function sendContact(
  form,
  config,
  loadClient = () => import("@emailjs/browser"),
) {
  if (!config.service || !config.template || !config.publicKey)
    throw new Error("Contact configuration missing");
  const { default: client } = await loadClient();
  return client.sendForm(config.service, config.template, form, {
    publicKey: config.publicKey,
  });
}
