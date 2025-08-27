import React, {useState, useEffect} from 'react';
import './PageStyles.css';
import ForumPostCard from '../components/ForumPostCard.jsx';

const ForumPage = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchPosts = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/posts');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            console.error('Failed to fetch posts:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    // This functionality is now paused
    // const handleAddPostClick = () => {
    //   alert('发帖功能将在用户系统完成后开放！');
    // };

    return (
        <div className="page-content">
            {/* The add post button has been removed from here */}
            {isLoading ? (
                <p>正在加载帖子...</p>
            ) : posts.length > 0 ? (
                posts.map(post => (
                    <ForumPostCard key={post._id} post={post}/>
                ))
            ) : (
                <p>还没有帖子，快来发布第一篇吧！</p>
            )}
        </div>
    );
};

export default ForumPage;
