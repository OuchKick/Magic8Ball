import React, {useState} from 'react';
import logo from './image/8ball.png'
import styled, {keyframes, css} from 'styled-components';



function App() {
  const [question, setQuestion] = useState('');
  const [history, setHistory] = useState([]);
  const [trigger, setTrigger] = useState(false);

  let params = encodeURIComponent("Is today going to be a good day?");
  let uri = "https://8ball.delegator.com/magic/JSON/" + params;
 
  const myFunction = () => {
    setTrigger(true);
    if (question.match(/^[A-Za-z'0-9 ]+[?]/)) {
      fetch(uri)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        document.getElementById("query").innerHTML = JSON.stringify(json.magic.answer);
        checkHistory(question, json.magic.answer);
      }) 
    } else {
      document.getElementById("query").innerHTML = "That wasn't a question.";
    } 
  };

  const checkHistory = (question, x) => {
    if (history.length === 10) {
      history.shift();
    } 
    if (history.length < 10) {
      history.push([question, x]);
    }
  };

  const questionFunc = (e) => {
      setQuestion(e.target.value);
      setTrigger(false);
    };

  const historyAlert = () => {
    window.alert(history);
  };



  return (
    <Background>
    <ContentContainer>
      <MagicTitle>
        Magic 8-Ball
      </MagicTitle>
      <MagicBall src={logo} checked={trigger}/>
      <ResultContainer>
        <Result id="query"></Result>
      </ResultContainer>
      <Input placeholder="Got a question?" onChange={questionFunc}/>
      <SubmitButton id="btn" onClick={myFunction}>Submit</SubmitButton>
      <HistoryButton onClick={historyAlert}>History</HistoryButton>
    </ContentContainer>
    </Background>
  );
}
export default App;



const shake = keyframes`
0% { 
  transform: translate(1px, 1px) rotate(1deg); 
}
  10% { 
    transform: translate(-1px, -2px) rotate(-1deg); 
  }
  20% { 
    transform: translate(-3px, 0px) rotate(1deg); 
  }
  30% { 
    transform: translate(3px, 2px) rotate(0deg); 
  }
  40% { 
    transform: translate(1px, -1px) rotate(1deg); 
  }
  50% { 
    transform: translate(-1px, 2px) rotate(-1deg); 
  }
  60% { 
    transform: translate(-3px, 1px) rotate(0deg); 
  }
  70% { 
    transform: translate(3px, 1px) rotate(-1deg); 
  }
  80% { 
    transform: translate(-1px, -1px) rotate(1deg); 
  }
  90% { 
    transform: translate(1px, 2px) rotate(0deg); 
  }
  100% { 
    transform: translate(1px, 1px) rotate(-1deg); 
  }
`;




const shakeWell = keyframes`
0% { 
  transform: translate(1px, 1px) rotate(10deg); 
}
  10% { 
    transform: translate(-1px, -2px) rotate(-10deg); 
  }
  20% { 
    transform: translate(-3px, 0px) rotate(11deg); 
  }
  30% { 
    transform: translate(3px, 2px) rotate(0deg); 
  }
  40% { 
    transform: translate(1px, -1px) rotate(1deg); 
  }
  50% { 
    transform: translate(-1px, 2px) rotate(-15deg); 
  }
  60% { 
    transform: translate(-3px, 1px) rotate(0deg); 
  }
  70% { 
    transform: translate(3px, 1px) rotate(-1deg); 
  }
  80% { 
    transform: translate(-1px, -1px) rotate(1deg); 
  }
  90% { 
    transform: translate(1px, 2px) rotate(0deg); 
  }
  100% { 
    transform: translate(1px, 1px) rotate(-1deg); 
  }
`;



const gradient = keyframes`
0% {
  background-position: 0% 50%;
}
50% {
  background-position: 100% 50%;
}
100% {
  background-position: 0% 50%;
}
`;

const MagicTitle = styled.h1`
    font-size: 60px;
    @media (min-width: 320px) {
      font-size: 50px;
    }
`;

const Background = styled.section`
  position: absolute;
	background: linear-gradient(-45deg, #f25f25, #25b8f2);
	background-size: 300% 300%;
	animation: ${gradient} 10s ease infinite;
	min-height: 100%;
  min-width: 100%;
`;


const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Josefin Sans;
`;


const MagicBall = styled.img`
  height: 300px;
  width: 300px;
  transition: transform 250ms ease-in-out;
  &:hover {
    animation: ${shake} 2s infinite;
  }
  ${props => (props.checked) && css`
  animation: ${shakeWell} .5s;
  `}
`;

const ResultContainer = styled.div`
  margin-top: 15px;
  width: 200px;
  height: 75px;
  background-color: rgba(88, 88, 88, .25);
  border-radius: 15px;
`;

const Result = styled.p`
  text-align: center;
  font-size: 20px;
`

const Input = styled.input`
  width: 300px;
  height: 100px;
  border-radius: 50px;
  font-family: Josefin Sans;
  font-size: 20px;
  margin-top: 15px;
  background: rgba( 255, 255, 255, 0.25 );
  backdrop-filter: blur( 6px );
  -webkit-backdrop-filter: blur( 6px );
   border: none;
   color: #fff;
  ::placeholder {
    text-align: center;
    font-size: 20px;
    color: #fff;
  }
`;

const SubmitButton = styled.button`
width: 200px;
height: 100px;
border-radius: 50px;
font-family: Josefin Sans;
font-size: 20px;
margin-top: 15px;
background: rgba( 255, 255, 255, 0.25 );
backdrop-filter: blur( 6px );
-webkit-backdrop-filter: blur( 6px );
border: none;
color: #fff;
&:hover {
  transform: scale(1.1);
  background: #25b8f2;
}
`;

const HistoryButton = styled.button`
width: 200px;
height: 100px;
border-radius: 50px;
font-family: Josefin Sans;
font-size: 20px;
margin: 15px 0px 10px 0;
background: rgba( 255, 255, 255, 0.25 );
backdrop-filter: blur( 6px );
-webkit-backdrop-filter: blur( 6px );
border: none;
color: #fff;
&:hover {
  transform: scale(1.1);
  background: #f25f25;
}
`;

