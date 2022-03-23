import React from 'react';
import { TopicProps, TopicsProps } from '../../proptypes';
import StyledForumTopicList from './forumTopicList.styled';
import StyledTopicBox from './topicbox.styled';
import ForumReplies from './ForumReplies';


function TopicBox({ topic, userShow, showDetail }: TopicProps) {

  const upVote = () => {};

  const downVote = () => {};

  const renderTopic = (topic: Topic) => {};

  const renderTopics = () => {
    // map through topics.
    // Render Topic component
  };

  return (
    <StyledTopicBox>

        <div className="score">
          <div>
            <button className="up"></button>
          </div>
          <div className="number">{topic.voteScore}</div>
          <div>
            <button className="down"></button>
          </div>
        </div>

        <div className="text-container">
          <div className="topic-header">
            <div>{topic.title}</div>
            <div>{topic.date.toDateString()}</div>
          </div>

          <div className="bottom-half">
            <div className="user-info">
              <div className="avatar">
                <img
                  src={`https://avatars.dicebear.com/api/male/${topic.avatar}.svg`}
                ></img>
              </div>
              <div>{topic.authorName}</div>
            </div>

            <div className="topic-content">
              <div>{topic.body}</div>

            </div>
          </div>
          <ForumReplies
            topic={topic}
            showDetail={showDetail}
            userShow={userShow}
          />
        </div>

    </StyledTopicBox>
  );
}

export default TopicBox;
