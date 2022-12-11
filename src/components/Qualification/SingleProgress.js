import ProgressBar from '@ramonak/react-progress-bar';
import React from 'react';

const SingleProgress = ({ skill }) => {
  console.log(skill);
  return (
    <div className="my-4">
      <p className="pl-1 text-lg text-slate-200 flex justify-between">
        <span>{skill.subject}</span>
        <span>{skill.skill}%</span>
      </p>
      <ProgressBar
        completed={skill.skill}
        customLabel=' '
        animateOnRender={true}
        transitionDuration={"2s"}
        baseBgColor="#475569"
        borderRadius="15px"
        bgColor="#67E8F9"
        labelColor="#0EA5E9"
        height='15px'
      />
    </div>
  );
};

export default SingleProgress;