import React from 'react';
import Comment from './Comment';
import CommentsList from './CommentsList';

const data = [
  {
    name: 'Akshay Saini',
    text: 'Lorem ipsum dolor sit amet, consectetur adip',
    replies: [],
  },
  {
    name: 'Akshay Saini',
    text: 'Lorem ipsum dolor sit amet, consectetur adip',
    replies: [
      {
        name: 'Akshay Saini',
        text: 'Lorem ipsum dolor sit amet, consectetur adip',
        replies: [],
      },
      {
        name: 'Akshay Saini',
        text: 'Lorem ipsum dolor sit amet, consectetur adip',
        replies: [
          {
            name: 'Akshay Saini',
            text: 'Lorem ipsum dolor sit amet, consectetur adip',
            replies: [
              {
                name: 'Akshay Saini',
                text: 'Lorem ipsum dolor sit amet, consectetur adip',
                replies: [
                  {
                    name: 'Akshay Saini',
                    text: 'Lorem ipsum dolor sit amet, consectetur adip',
                    replies: [
                      {
                        name: 'Akshay Saini',
                        text: 'Lorem ipsum dolor sit amet, consectetur adip',
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: 'Akshay Saini',
                    text: 'Lorem ipsum dolor sit amet, consectetur adip',
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'Akshay Saini',
    text: 'Lorem ipsum dolor sit amet, consectetur adip',
    replies: [],
  },
  {
    name: 'Akshay Saini',
    text: 'Lorem ipsum dolor sit amet, consectetur adip',
    replies: [],
  },
  {
    name: 'Akshay Saini',
    text: 'Lorem ipsum dolor sit amet, consectetur adip',
    replies: [],
  },
  {
    name: 'Akshay Saini',
    text: 'Lorem ipsum dolor sit amet, consectetur adip',
    replies: [],
  },
];

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={data} />
    </div>
  );
};

export default CommentsContainer;
