var sd = 32;

jQuery(document).ready(function(){
  $('#totalSD').change(function(){
  	if(!isNaN($('#totalSD').val())) {
  		sd = $('#totalSD').val();
  		
  		$('#sdEarned').val(calculateSDEarned());
  		$('#spentOnStats').val(calculateSp());
  		$('#fortune').val(calculateFortune());
      $('#tp').val(calculateTp());
      $('#maxTechRank').val(calculateMaxRank());

      $('#genTraits').val(calculateGenTraits());
      $('#profTraits').val(calculateProfTraits());

  	}
  })
});

function calculateSDEarned() {
	return sd - 32;
}

function calculateSp() {
  var earned = calculateSDEarned();
  var sp = 0;

  //TODO: clean this up a bit.
  if(earned <= 150) {
    sp =  earned + 32;
  }
  else if (earned <= 250) {
    sp = 182 + Math.floor((earned - 150)/1.5);
  }

  else if (earned <= 350) {
    sp = 182 + Math.floor(99/1.5) + Math.floor((earned - 250)/2);
  }

  else {
    sp = 182 + Math.floor(99/1.5) + Math.floor((99/2) + Math.floor((earned - 350)/3);
  }

  return sp;
}

function calculateFortune() {
	return Math.floor(calculateSp()/4);
}

function calculateTp() {
	return calculateFortune() * 2;
}

function calculateMaxRank() {
	return Math.floor(calculateFortune()/2);
}

function calculateGenTraits() {
  var earned = calculateSDEarned();
  var tp = 3;

  if(earned <= 200) {
    tp = tp + Math.floor(earned/50);
  }
  else if(earned <= 500) {
    tp = tp + 4 + Math.floor(earned/75);
  }
  else {
    tp = tp + 8;
  }

  return tp;
}

function calculateProfTraits() {
  var earned = calculateSDEarned();
  var tp = 1;

  if(earned >= 50 && earned < 350) {
    tp = tp + 1 + Math.floor((earned - 50)/100);
  }
  else if (earned => 350 && earned < 500) {
    tp = 5;
  }
  else if(earned >= 500) {
    tp = 6;
  }

  return tp;
}