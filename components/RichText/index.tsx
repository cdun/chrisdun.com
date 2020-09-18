import React from 'react';

interface IProps {
  textOrArr: RichText;
}

const RichText = ({ textOrArr }: IProps) => {
  if ( Array.isArray(textOrArr) ) {
    return (
      <>{textOrArr.map((content, idx) => <p key={idx} dangerouslySetInnerHTML={{ __html: content }} />)}</>
    )
  }

  return (
    <p dangerouslySetInnerHTML={{ __html: textOrArr }} />
  );
}

export default RichText;