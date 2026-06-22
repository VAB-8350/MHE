const generateLink = (product: { name: string; id: string }) => {

  const baseUrl = `https://wa.me/${import.meta.env.WHATSAPP_NUMBER}`;
  const message = `Hola, estoy interesado en el producto "${product.name}"`;
  const productLink = `https://www.mhe-indumentaria.com/catalogo/${product.id}`;

  return `${baseUrl}?text=${encodeURIComponent(`${message}\n link: ${productLink}`)}`;
};

export default generateLink;