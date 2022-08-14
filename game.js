'use strict';

(() => {
    const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];
    const FIGURES_COMP = ['камень', 'ножницы', 'бумага'];
    const getRandomIntInclusive = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); 
      };
      const game = () => {
        const result = {
            rokResult: 0,
            currentMove: 0,
            player: 5,
            computer: 5,
         };
          return function start(){


            if (result.rokResult == 0) {
               rokPlay()
            } else if (result.currentMove == 0 || result.currentMove % 2 == 0){
               playFirst()
            } else {
               compFirst()
            };



            function rokPlay() {
               let playerAnswer = prompt('камень, ножницы, бумага?'); 
               if (playerAnswer === null) {
                  let endQuestion = confirm("Точно хотите выйти?");
                  if (!endQuestion){
                  return start()
                  }
                  if (endQuestion){
                     return
                  }; 
                 }; 
            
               
                  playerAnswer = playerAnswer.toLowerCase();

                  let playerMath;

                  FIGURES_RUS.forEach(element => { 
                     for (let i=0; i < playerAnswer.length; i++){
                        if (element[i] !== playerAnswer[i]) return
                     } return playerMath = FIGURES_RUS.indexOf(element) + 1;
                     });
                     if (!playerMath || playerAnswer.length == 0 )  {
                        return start();
                     }
                  let compAnswer;
                  const compMath = getRandomIntInclusive(1,3);

                  if (compMath == playerMath) {
                     alert(`Компьютер ${FIGURES_COMP[compMath-1]}  Игрок ${FIGURES_RUS[playerMath-1]}   Ничья`);     
                     console.log('Ничья');
                     return start()
                  }
                  else if (playerMath==1 & compMath==2 ||  playerMath==2 & compMath == 3  || playerMath == 3 & compMath == 1) {
                     alert(`Компьютер ${FIGURES_COMP[compMath-1]}   Игрок ${FIGURES_RUS[playerMath-1]}   Игрок выиграл`);      
                     console.log('Игрок выиграл');
                     result.rokResult++;
                     playFirst();
                  }
                  else {
                     alert(`Компьютер ${FIGURES_COMP[compMath-1]}   Игрок ${FIGURES_RUS[playerMath-1]}     Компьютер выиграл`);
                     result.rokResult++;
                     result.currentMove++;
                     compFirst()
                  };
            };
              function playFirst() {
               alert('Ход игрока');
              
               if (result.computer <= 0 || result.player <= 0){
                  alert(`Game over: Компьютер ${result.computer}  Игрок ${result.player}`);
                  console.log(result.player, result.computer);
                  let repeatQuestion = confirm("Хотите играть еще?");
                  if (repeatQuestion){
                     result.rokResult= 0;
                     result.currentMove = 0;
                     result.player = 5;
                     result. computer = 5;
                  return start()
                  }
                  if (!repeatQuestion){
                     return
                  }; 
                  }
                  let playerAnswer = Number(prompt(`Введите число от 1 до ${result.player}.`));
                  const compAnswer = getRandomIntInclusive(1,2);
                  console.log("Ответ компьютера" + '  ' + compAnswer);
                  if (playerAnswer === null || playerAnswer < 1 ||  playerAnswer > result.player || playerAnswer.length == 0  || isNaN(playerAnswer)) {
                     return playFirst()
                     }
                  else if (playerAnswer % 2 === 0 & compAnswer % 2 === 0 || playerAnswer % 2 !== 0 & compAnswer % 2 !== 0){
                     result.currentMove++;
                        result.computer += playerAnswer; result.player -= playerAnswer;
                        console.log ('Компьютер' + '  ' + result.computer + '  ' + 'Игрок ' + '  ' + result.player);
                     return start()
                  }  
                  else {
                     result.currentMove++;
                     result.player += playerAnswer; result.computer -= playerAnswer;
                     console.log ('Компьютер' + '  ' + result.computer + '  ' + 'Игрок ' + '  ' + result.player);
                        return start()
                  };
               };  


               function compFirst() {
                  alert('Ход компа');
                  result.currentMove++;
                  if (result.computer <= 0 || result.player <= 0){
                     alert(`Game over: Компьютер ${result.computer}  Игрок ${result.player}`);
                     console.log(result.player, result.computer);
                     let repeatQuestion = confirm("Хотите играть еще?");
                     if (repeatQuestion){
                        result.rokResult= 0;
                        result.currentMove = 0;
                        result.player = 5;
                        result. computer = 5;
                     return start()
                     }
                     if (!repeatQuestion){
                        return
                     };
                  };

                  const compAnswer = getRandomIntInclusive(1, result.computer);
                     console.log ('Компьютер загадал' + '  ' + compAnswer);
                     let playerAnswer = confirm('Число четное?');
                     if (playerAnswer & compAnswer % 2 == 0  || !playerAnswer & compAnswer % 2 !== 0) {
                     result.player += compAnswer; result.computer -= compAnswer;
                     console.log (' Угадал'  + '  ' + 'Компьютер' + '  ' + result.computer + '  ' + 'Игрок ' + '  ' + result.player);
                     return start()
                     }
                     else {
                     result.player -= compAnswer; result.computer += compAnswer;
                     console.log (' Неугадал'  + '  ' + 'Компьютер' + '  ' + result.computer + '  ' + 'Игрок ' + '  ' + result.player);
                     return start()
                     };
               };
         }; 

      };
            
      window.RPS = game;

})()