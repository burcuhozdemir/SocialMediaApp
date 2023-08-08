import React, {useState, useEffect} from 'react';
import {
  Pressable,
  SafeAreaView,
  View,
  Text,
  FlatList,
  Dimensions,
} from 'react-native';
import Title from '../../components/Title/Title';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import style from './style';
import UserStory from '../../components/UserStory/UserStory';
import UserPost from '../../components/UserPost/UserPost';
import globalStyle from '../../assets/styles/main';
import {Routes} from '../../navigation/Routes';

const Home = ({navigation}) => {
  //All of the items in our stories
  const data = [
    {
      firstName: 'Joseph',
      id: 1,
    },
    {
      firstName: 'Angel',
      id: 2,
    },
    {
      firstName: 'White',
      id: 3,
    },
    {
      firstName: 'Olivier',
      id: 4,
    },
    {
      firstName: 'nata',
      id: 5,
    },
    {
      firstName: 'Adam',
      id: 6,
    },
    {
      firstName: 'Sean',
      id: 7,
    },
    {
      firstName: 'Nicolas',
      id: 8,
    },
    {
      firstName: 'Joe',
      id: 9,
    },
  ];
  const posts = [
    {
      firstName: 'Allison',
      lastName: 'Becker',
      location: 'Sukabumi, Jawa Barat',
      likes: 1201,
      comments: 24,
      bookmarks: 55,
      id: 1,
    },
    {
      firstName: 'Jennifer',
      lastName: 'Wilkson',
      location: 'Pondok Leungsir, Jawa Barat',
      likes: 570,
      comments: 12,
      bookmarks: 60,
      id: 2,
    },
    {
      firstName: 'Adam',
      lastName: 'Spera',
      location: 'Boston, Massachusetts',
      likes: 100,
      comments: 8,
      bookmarks: 7,
      id: 3,
    },
    {
      firstName: 'Nata',
      lastName: 'Vacheishvili',
      location: 'New York, New York',
      likes: 300,
      comments: 18,
      bookmarks: 17,
      id: 4,
    },
    {
      firstName: 'Nicolas',
      lastName: 'Namoradze',
      location: 'Berlin, Germany',
      likes: 1240,
      comments: 56,
      bookmarks: 20,
      id: 5,
    },
  ];
  const pageSize = 4;
  const pageSizePosts = 2;
  const [pageNumber, setPageNumber] = useState(1);
  const [postPageNumber, setPostPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingPosts, setIsLoadingPosts] = useState(false);
  const [renderedData, setRenderedData] = useState(data.slice(0, pageSize));
  const [renderedDataPosts, setRenderedDataPosts] = useState(
    posts.slice(0, pageSizePosts),
  );
  const [screenData, setScreenData] = useState(Dimensions.get('screen'));

  useEffect(() => {
    console.log(screenData);
    //If our window size updates, this event listener will run
    Dimensions.addEventListener('change', result => {
      console.log('changed screen data');
      setScreenData(result.screen);
    });
  }, []);

  const pagination = (data, pageNumber, pageSize, posts = false) => {
    let startIndex = (pageNumber - 1) * pageSize;
    if (startIndex > data.length) {
      return [];
    }
    if (!posts) {
      setPageNumber(pageNumber);
    } else {
      setPostPageNumber(pageNumber);
    }

    return data.slice(startIndex, startIndex + pageSize);
  };

  return (
    <SafeAreaView style={globalStyle.backgroundWhite}>
      <FlatList
        ListHeaderComponent={
          <>
            <View style={style.header}>
              <Title title="Let’s Explore" />
              <Pressable style={style.messageIcon}>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  color={'#CACDDE'}
                  size={20}
                />
                <View style={style.messageNumberContainer}>
                  <Text
                    style={[
                      style.messageNumber,
                      {fontSize: screenData.height / 130},
                    ]}>
                    2
                  </Text>
                </View>
              </Pressable>
            </View>
            <View style={style.userStoryContainer}>
              <FlatList
                onMomentumScrollBegin={() => setIsLoadingPosts(false)}
                onEndReachedThreshold={0.5}
                keyExtractor={item => item.id.toString()}
                onEndReached={() => {
                  if (!isLoading) {
                    setIsLoading(true);
                    setRenderedData(prev => [
                      ...prev,
                      ...pagination(data, pageNumber + 1, pageSize),
                    ]);
                    setIsLoading(false);
                  }
                }}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={renderedData}
                renderItem={({item}) => (
                  <UserStory firstName={item.firstName} />
                )}
              />
            </View>
          </>
        }
        onMomentumScrollBegin={() => setIsLoadingPosts(false)}
        onEndReachedThreshold={0.5}
        keyExtractor={item => item.id.toString() + 'post'}
        onEndReached={() => {
          if (!isLoadingPosts) {
            setIsLoadingPosts(true);
            setRenderedDataPosts(prev => [
              ...prev,
              ...pagination(posts, postPageNumber + 1, pageSizePosts, true),
            ]);
            setIsLoadingPosts(false);
          }
        }}
        showsVerticalScrollIndicator={false}
        data={renderedDataPosts}
        renderItem={({item}) => (
          <View style={style.userPostContainer}>
            <UserPost
              firstName={item.firstName}
              lastName={item.lastName}
              comments={item.comments}
              likes={item.likes}
              bookmarks={item.bookmarks}
              location={item.location}
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
