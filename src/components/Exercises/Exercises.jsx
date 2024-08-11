import './Exercises.css';
import ExercisesItems from '../ExercisesItems/ExercisesItems';
import ellipsisImg from '../../assets/icon-ellipsis.svg';
import exerciseImg from '../../assets/icon-exercise.svg';
import playImg from '../../assets/icon-play.svg';
import selfcareImg from '../../assets/icon-self-care.svg';
import socialImg from '../../assets/icon-social.svg';
import studyImg from '../../assets/icon-study.svg';
import workImg from '../../assets/icon-work.svg';



function Exercises() {
  const arrayofOpjects = [
    {
        selectionColor: "hsl(15, 100%, 70%)",
        selectionIcon: workImg,
        selectionText: "Work",
        selectionImg: ellipsisImg,
        selectionHours: "32hrs",
        selectionWeeks: "Last Week - 36hrs",
        uniqueID: 1,
    },
    {
        selectionColor: "hsl(195, 74%, 62%)",
        selectionIcon: playImg,
        selectionText: "Play",
        selectionImg: ellipsisImg,
        selectionHours: "10hrs",
        selectionWeeks: "Last Week - 8hrs",
        uniqueID: 2,
    },
    {
        selectionColor: "hsl(348, 100%, 68%)",
        selectionIcon: studyImg,
        selectionText: "Study",
        selectionImg: ellipsisImg,
        selectionHours: "4hrs",
        selectionWeeks: "Last Week - 7hrs",
        uniqueID: 3,
    },
    {
        selectionColor: "hsl(145, 58%, 55%)",
        selectionIcon: exerciseImg,
        selectionText: "Exercise",
        selectionImg: ellipsisImg,
        selectionHours: "4hrs",
        selectionWeeks: "Last Week - 5hrs",
        uniqueID: 4,
    },
    {
        selectionColor: "hsl(264, 64%, 52%)",
        selectionIcon: socialImg,
        selectionText: "Social",
        selectionImg: ellipsisImg,
        selectionHours: "5hrs",
        selectionWeeks: "Last Week - 10hrs",
        uniqueID: 5,
    },
    {
        selectionColor: "hsl(43, 84%, 65%)",
        selectionIcon: selfcareImg,
        selectionText: "Self Care",
        selectionImg: ellipsisImg,
        selectionHours: "2hrs",
        selectionWeeks: "Last Week - 2hrs",
        uniqueID: 6,
    },
  ];
    return(
     <div id='cardsContainer'>
        {
            arrayofOpjects.map((item) => {
                return(
                    <ExercisesItems
                    key={item.uniqueID}
                    selectionColor= {item.selectionColor}
                    selectionIcon= {item.selectionIcon}
                    selectionText= {item.selectionText}
                    selectionImg= {item.selectionImg}
                    selectionHours= {item.selectionHours}
                    selectionWeeks= {item.selectionWeeks}
                    ></ExercisesItems>
                );
            })
        }

     </div>
    );
}

export default Exercises