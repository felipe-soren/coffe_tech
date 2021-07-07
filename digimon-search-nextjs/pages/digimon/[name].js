import { Card, Avatar } from "antd";

const { Meta } = Card;

import DefaultLayout from "../../components/_layouts/Default";

function Digimon({ post }) {
  return (
    <DefaultLayout>
      <Card style={{ width: 500, height: 180, marginTop: 16 }}>
        <Meta
          avatar={
            <Avatar src={post[0].img} style={{ width: 150, height: 150 }} />
          }
          title={post[0].name}
          description={post[0].level}
        />
      </Card>
    </DefaultLayout>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://digimon-api.vercel.app/api/digimon");
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { name: post.name.toLowerCase() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://digimon-api.vercel.app/api/digimon/name/${params.name.toLowerCase()}`
  );
  const post = await res.json();

  return { props: { post } };
}

export default Digimon;
