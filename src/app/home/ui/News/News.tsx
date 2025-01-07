import { INewsApiResponse } from "@/src/types/INews";
import styles from "./News.module.scss";
import { NewsCard } from "./NewsCard/NewsCard";

export const News = async () => {
  const res = await fetch(`${process.env.API_URL}/api/news?populate=*`);

  if (!res.ok) {
    throw new Error("Failed to fetch news");
  }

  const { data }: INewsApiResponse = await res.json();

  return (
    <section className={styles.news} id="news">
      <div className={`${styles.newsContainer} container`}>
        <h2 className={`${styles.title} def-title`}>Новости</h2>
        <ul className={styles.list}>
          {data?.map((newsItem) => {
            const { id, title, text, image } = newsItem;

            const imageUrl = `${process.env.API_URL}${
              image?.formats?.medium?.url || image?.url
            }`;

            return (
              <NewsCard id={id} image={imageUrl} title={title} text={text} />
            );
          })}
        </ul>
      </div>
    </section>
  );
};
