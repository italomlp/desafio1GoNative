import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';


const Post = ({ post }) => (
  <View style={styles.postContainer}>
    <Text style={styles.postTitle}>{post.title}</Text>
    <Text style={styles.postAuthor}>{post.author}</Text>
    <Text style={styles.postDescription}>{post.description}</Text>
  </View>
);

{/*Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};*/}


const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginBottom: 20,
    borderRadius: 5,
    shadowColor: '#DA6C6C',
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2,},
    shadowOpacity: 1.0,
  },
  postTitle: {
    fontWeight: 'bold',
    color: '#333333',
  },
  postAuthor: {
    color: '#999999',
    borderBottomWidth: 1,
    paddingBottom: 5,
    borderColor: '#EEEEEE',
  },
  postDescription: {
    paddingTop: 5,
    color: '#666666',
  }
});

export default Post;
