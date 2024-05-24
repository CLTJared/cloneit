import { faker } from '@faker-js/faker';
import { PostMedia, UserArticle } from '../models/models';

export const generateFakeArticle = (): UserArticle => {
    return {
        id: faker.string.uuid(),
        location: faker.internet.domainWord(),
        title: faker.lorem.sentence(),
        description: faker.lorem.sentences(),
        media: generateMedia(),
    }
}


const generateMedia = (): PostMedia => {
    const postmedia = (postmedia: PostMedia, prob: number) => faker.helpers.maybe(() => postmedia, {probability: prob})

    let postMediaType = postmedia(faker.image.url() , 0.2)
    if (!postMediaType) postMediaType = undefined

    return postMediaType as PostMedia
}