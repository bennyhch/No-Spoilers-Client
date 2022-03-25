import React, { createContext, useContext, useEffect, useState } from 'react';
import ForumNewTopic from './ForumNewTopic';
import ForumTopicList from './ForumTopicList';
import StyledForum from './forum.styled';
import { useSelector } from 'react-redux';
import { fetchTopics } from '../../API/user-api';
import { CurrentShowContext, ForumContext } from '../../App';
// import { dummyTopics } from './mocks';

function Forum() {
  const user = useSelector<MainState>((state) => state.user.user) as User;

  const { showDetail, userTVShow } = useContext(CurrentShowContext);

  const [topics, setTopics] = useState<Array<UserTopic>>([]);

  useEffect(() => {
    if (userTVShow && !Number.isNaN(userTVShow.TMDB_show_id)) {
      const getTopics = async () => {
        let topics = await fetchTopics(
          '' + userTVShow.TMDB_show_id,
          '' + user._id
        );
        if (topics) {
          topics = topics?.reverse().flatMap((x) => x);
          setTopics(topics);
        }
      };
      getTopics();
    } else {
      console.log('====================================');
      console.log('in forum, userTV or id is not defined');
      console.log('====================================');
    }
  }, [userTVShow]);

  const updateTopics = (topic: UserTopic) => {
    setTopics([...topics, topic]);
  };

  const updateTopic = (topic: UserTopic) => {
    const clone: UserTopic[] = [...topics];
    clone.splice(
      clone.findIndex((oldTopic) => oldTopic._id === topic._id),
      1,
      topic
    );
    setTopics(clone);
  };

  const addReply = (topicToUpdate: UserTopic, reply: Reply) => {
    const topicsCopy = [...topics];
    topicsCopy
      .find((topic) => topic._id === topicToUpdate._id)
      ?.replies.push(reply);
    setTopics(topicsCopy);
  };

  return (
    <ForumContext.Provider
      value={{
        topics: topics,
        setTopics: setTopics,
        updateTopics: updateTopics,
        addReply: addReply,
        updateTopic,
      }}
    >
      <StyledForum>
        <h2>
          {showDetail.name}: Next Episode: {userTVShow.episodeCodeNext}
        </h2>
        <ForumNewTopic />
        <ForumTopicList />
      </StyledForum>
    </ForumContext.Provider>
  );
}

export default Forum;
