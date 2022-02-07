import NewsAPI from "newsapi";

class NewsletterService {
    async query(pageSize: string) {
        const newsapi = new NewsAPI(process.env.NEWS_API);

        const news = await newsapi.v2.topHeadlines({
            category: 'technology',
            language: 'pt',
            country: 'br',
            pageSize,
        });

        return news;
    }
}

export { NewsletterService }