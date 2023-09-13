import { useState, useEffect } from "react";
import * as PostsAPI from "../../utilities/post-api";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


export default function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function getallPosts() {
      const posts = await PostsAPI.index();
      setPosts(posts);
    }
    getallPosts();
  }, []);


  return (
    <main>
      {posts.map((post, index) => (
        <Row xs={2} md={2} className="g-4">
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col key={index}>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={post.imageURL} />
      <Card.Body>
        <Card.Text>
        {post.caption}
        </Card.Text>
      </Card.Body>
      </Card>
      </Col>
      ))}
    </Row>
        ))}
    </main>
  );
}
