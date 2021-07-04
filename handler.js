'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'The function has been executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };
};
