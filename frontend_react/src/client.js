//where we connect sanity and react
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
export const client = sanityClient({
    //projectId: process.env.REACT_APP_PROJECT_ID,
    projectId: 'raiux7up',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    //token: process.env.REACT_APP_SANITY_TOKEN,
    toke: 'sktCbdrcpqmTQRHbWnvZX287eCCIFBXpE4g3vDZxRp2TCypx6oFBLdALQ6Vqh18L9qbH1WIxnPkUjdA8ij5g5KQR40G2Wti8I40JDAOaFbJnSglpqRFxwg68ZvpKkORNvx3dtvCQ6cUvzYrIY1rJzdLiDI1kCb06iLkf3Gfr0QQ76brgdCnB',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
//code to write when using images from sanity