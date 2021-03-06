const string = `
<style>
.skin * {box-sizing: border-box; margin: 0; padding: 0;}
ul, ol {list-style: none;}

.chopper-container {
  position: relative;
  margin-top: 20%;
  left: 50%;
  transform: translateX(-50%);
  width: 700px;
  height: 500px;
}

.antlers-left {
  border: 6px solid #000;
  border-top: none;
  position: absolute;
  width: 21%;
  height: 16%;
  top: 5%;
  left: 7%;
  border-top-left-radius: 50% 20%;
  border-top-right-radius: 50% 20%;
  border-bottom-right-radius: 50% 80%;
  border-bottom-left-radius: 50% 62%;
  background: rgb(130, 96, 59);
}

.antlers-left li {
  position: absolute;
  width: 25%;
  height: 120%;
  display: inline-block;
  box-shadow: 6px 0 0 0 #000 inset,
  -6px 0 0 0 #000 inset,
  0 6px 0 0 #000 inset;
  background: rgb(130, 96, 59);
  z-index: 2;
}

.antlers-left li:first-child {
  top: -58%;
  left: -7%;
  border-radius: 50% 10% 0 40%;
}

.antlers-left li:nth-child(2) {
  top: -69%;
  left: 10%;
  border-radius: 50% 10% 0 40%;
  box-shadow: 6px 0 0 0 #000 inset,
  0 6px 0 0 #000 inset,
  -5px 8px 0 0 rgba(0, 0, 0, .2);
}

.antlers-left li:nth-child(3) {
  top: -76%;
  left: 27%;
  border-radius: 50% 15% 10% 40%;
  box-shadow: 6px 0 0 0 #000 inset,
  -6px 0 0 0 #000 inset,
  0 6px 0 0 #000 inset,
  -5px 8px 0 0 rgba(0, 0, 0, .2);
}

.antlers-left li:nth-child(4) {
  top: -72%;
  left: 67%;
  height: 110%;
  border-radius: 30% 40% 40% 10%;
}

.antlers-left li:nth-child(5) {
  top: -64%;
  left: 85%;
  height: 125%;
  border-radius: 30% 40% 45% 30%;
  -webkit-transform: rotate(5deg);
  box-shadow: 6px 0 0 0 #000 inset,
  -6px 0 0 0 #000 inset,
  0 6px 0 0 #000 inset,
  -5px 8px 0 0 rgba(0, 0, 0, .2);
}

.antlers-left li:nth-child(6) {
  border: 6px solid #000;
  box-shadow: none;
  border-top: none;
  position: absolute;
  width: 25%;
  height: 67%;
  top: 74%;
  left: 80%;
  transform: rotate(-33deg) skew(0, -5deg);
  background: rgb(130, 96, 59);
  z-index: 0;
}

.antlers-left::before {
  content: '';
  position: absolute;
  transform: rotate(-5deg);
  top: 30%;
  left: 3.5%;
  border-radius: 65%;
  border-bottom-right-radius: 42% 67%;
  width: 95%;
  height: 50%;
  background: rgb(130, 96, 59);
  z-index: 3;
}

.antlers-left::after {
  position: absolute;
  top: -5%;
  left: 47.6%;
  width: 15%;
  height: 47%;
  border: 6px solid #000;
  border-top: 0;
  border-radius: 0 0 46% 45%;
  background: #FFF;
  z-index: 99;
  content: '';
}


.antlers-right {
  border: 6px solid #000;
  border-top: none;
  position: absolute;
  width: 21%;
  height: 16%;
  top: 5%;
  right: 7%;
  border-top-left-radius: 50% 20%;
  border-top-right-radius: 50% 20%;
  border-bottom-left-radius: 50% 80%;
  border-bottom-right-radius: 50% 62%;
  background: rgb(130, 96, 59);
}

.antlers-right li {
  position: absolute;
  width: 25%;
  height: 120%;
  display: inline-block;
  box-shadow: 6px 0 0 0 #000 inset,
  -6px 0 0 0 #000 inset,
  0 6px 0 0 #000 inset,
  -10px 1px 0 0 rgba(0, 0, 0, .2) inset;
  background: rgb(130, 96, 59);
  z-index: 2;
}

.antlers-right li:first-child {
  top: -58%;
  right: -7%;
  border-radius: 10% 50% 40% 0;
}

.antlers-right li:nth-child(2) {
  top: -69%;
  right: 10%;
  border-radius: 10% 50% 40% 0;
}

.antlers-right li:nth-child(3) {
  top: -76%;
  right: 27%;
  border-radius: 10% 50% 40% 10%;
}

.antlers-right li:nth-child(4) {
  top: -72%;
  right: 67%;
  height: 110%;
  border-radius: 40% 30% 10% 40%;
}

.antlers-right li:nth-child(5) {
  top: -64%;
  right: 85%;
  height: 125%;
  border-radius: 40% 30% 30% 45%;
  transform: rotate(-5deg);
}

.antlers-right li:nth-child(6) {
  border: 6px solid #000;
  box-shadow: none;
  border-top: none;
  position: absolute;
  width: 25%;
  height: 67%;
  top: 74%;
  right: 80%;
  transform: rotate(33deg) skew(0, 5deg);
  background: rgb(130, 96, 59);
  z-index: 0;
}

.antlers-right::before {
  content: '';
  position: absolute;
  transform: rotate(5deg);
  top: 30%;
  right: 3.5%;
  border-radius: 65%;
  border-bottom-left-radius: 42% 67%;
  width: 95%;
  height: 50%;
  background: rgb(130, 96, 59);
  z-index: 3;
}

.antlers-right::after {
  position: absolute;
  top: -5%;
  right: 47.6%;
  width: 15%;
  height: 47%;
  border: 6px solid #000;
  border-top: 0;
  border-radius: 0 0 45% 46%;
  background: #FFF;
  z-index: 99;
  content: '';
}


.hat {
  position: absolute;
  top: 0;
  width: 100%;
  height: 50%;
}

.hat .hat-top {
  border: 5px solid #000;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 320px;
  height: 115px;
  background-color: rgb(233, 116, 109);
}

.hat .hat-top::before {
  content: '';
  position: absolute;
  border: 5px solid #000;
  border-bottom: none;
  top: -65%;
  left: -5px;
  width: 100%;
  height: 65%;
  border-radius: 50% / 80% 80% 0 0;
  background: rgb(233, 116, 109);
}

.hat-top-shadow {
  position: absolute;
  top: 4%;
  left: -1%;
  width: 56%;
  height: 82%;
  z-index: 1;
  transform: skew(0, -15deg) scale(1, 2.5);
  border-top-right-radius: 69%;
  border-top-left-radius: 20%;
  background: rgba(0, 0, 0, .2);
}

.hat-top-x {
  margin: auto;
  transform: rotate(45deg);
  width: 36%;
  height: 36%;
  background: #fff;
  box-shadow: 0 0 0 6px #000 inset;
}

.hat-top-x::before {
  content: '';
  position: absolute;
  transform: rotate(90deg);
  width: 100%;
  height: 100%;
  background: #fff;
  box-shadow: 0 0 0 6px #000 inset;
}

.hat-top-x::after {
  content: '';
  position: absolute;
  width: 23.1%;
  height: 105%;
  transform: rotate(90deg) translateY(-43px) translateX(-0.8px);
  background: #fff;
}

.hat-brim {
  border: 6px solid #000;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  width: 550px;
  height: 220px;
  background: rgb(233, 116, 109);
  border-radius: 50% / 50% 50% 35% 35%;
  overflow: hidden;
}

.hat-brim::before {
  position: absolute;
  top: 14%;
  left: -6px;
  border: 6px solid #000;
  content: '';
  width: 100%;
  height: 90%;
  background: rgb(148, 71, 77);
  border-radius: 50% / 60% 60% 40% 40%;
  z-index: 1;
}

.hat-brim-shadow {
  position: absolute;
  width: 35%;
  height: 63%;
  border-radius: 0 30% 0 0;
  background: rgba(0, 0, 0, .3);
}

.face {
  position: absolute;
  border: 6px solid #000;
  top: 160px;
  transform: translateX(-50%);
  left: 50%;
  width: 310px;
  height: 150px;
  border-radius: 60% /60% 60% 0 0;
  border-bottom-right-radius: 25px 50px;
  border-bottom-left-radius: 25px 50px;
  background: rgb(223, 180, 125);
  box-shadow: 0 20px 0 rgba(0, 0, 0, .2) inset;
}

.face-shadow {
}

.face::before {
  content: '';
  position: absolute;
  border: 6px solid #000;
  width: 100%;
  height: 35%;
  top: 48%;
  left: -6px;
  background: rgb(223, 180, 125);
  z-index: 1;
  border-top: none;
  border-bottom: none;
}

.face::after {
  content: '';
  position: absolute;
  left: -6px;
  border: 6px solid #000;
  width: 100%;
  height: 83%;
  top: 77%;
  background: rgb(223, 180, 125);
  border-radius: 45% / 0 0 95% 95%;
}

.eye {
  border: 6px solid #000;
  position: absolute;
  display: inline-block;
  width: 73px;
  height: 73px;
  border-radius: 50%;
  z-index: 3;
  background: #fff;
}

.eyeball {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  border-radius: 50%;
  width: 80%;
  height: 80%;
  background: #000;
}

.eye-left {
  left: 32px;
  top: 45px;
}

.eye-right {
  right: 32px;
  top: 45px;
}

.nose {
  position: absolute;
  left: 50%;
  top: 70%;
  transform: translateX(-50%);
  width: 42px;
  height: 30px;
  border: 6px solid #000;
  border-radius: 60% / 40% 40% 100% 100%;
  background: rgb(65, 88, 140);
  z-index: 3;
}

.nose::after {
  content: '';
  position: absolute;
  border-radius: 45%;
  background: rgb(255, 255, 255);
  width: 35%;
  height: 40%;
}

.lip {
  position: absolute;
  width: 63px;
  height: 63px;
  border-radius: 50%;
  z-index: 2;
  background: rgb(223, 180, 125);
}

.lip-left {
  border-bottom: 6px solid #000;
  border-right: 6px solid #000;
  top: 70%;
  left: 50%;
  transform: rotate(55deg);
}

.lip-left::before {
  content: '';
  position: absolute;
  left: -13px;
  top: 0;
  width: 63px;
  height: 29px;
  transform: rotate(-35deg);
  background: rgb(223, 180, 125);
}

.lip-right {
  border-bottom: 6px solid #000;
  border-left: 5px solid #000;
  top: 70%;
  left: 30%;
  transform: rotate(-55deg);
}

.lip-right::before {
  content: '';
  position: absolute;
  left: 1px;
  top: -2px;
  width: 63px;
  height: 29px;
  transform: rotate(35deg);
  background: rgb(223, 180, 125);
}

.mouth {
  position: absolute;
  border: 6px solid #000;
  top: 80%;
  left: 51%;
  width: 20%;
  height: 85%;
  border-radius: 50%;
  background: rgb(126, 64, 49);
  z-index: 1;
  overflow: hidden;
  margin-left: -28px;
  animation: blink forwards infinite 4s ease-in-out;
}

.mouth::after {
  position: absolute;
  top: 47%;
  left: -11px;
  content: '';
  border: 6px solid #000;
  width: 120%;
  height: 80%;
  border-radius: 45%;
  background: rgb(223, 137, 104);
}

@keyframes blink {
  0%, 6%, 60%, 66%, 100% {
    transform: scale(1, 1) ;

  }
  1%, 61% {
    transform: scale(1.5, 0.1);
  }
}
</style>
`

export default string