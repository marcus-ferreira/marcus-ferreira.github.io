function calculate() {
	let points = 50
	let rank = ""
	let victoryCondition = document.querySelector("#victory-condition").value
	let turns = document.querySelector("#turns").value
	let effectiveAttacks = document.querySelector("#effective-attacks").value
	let defensiveWins = document.querySelector("#defensive-wins").value
	let faceDownPlays = document.querySelector("#face-down-plays").value
	let innitiateFusion = document.querySelector("#innitiate-fusion").value
	let equipMagic = document.querySelector("#equip-magic").value
	let pureMagic = document.querySelector("#pure-magic").value
	let triggerTrap = document.querySelector("#trigger-trap").value
	let cardsUsed = document.querySelector("#cards-used").value
	let remainingLp = document.querySelector("#remaining-lp").value
	let result = document.querySelector("#result")

	// Victory Condition
	if (victoryCondition == "total-annihilation") {
		points += 2
	} else if (victoryCondition == "victory-by-attrition") {
		points -= 40
	} else if (victoryCondition == "exodia-win") {
		points += 40
	}

	// Turns
	if (turns <= 4) {
		points += 12
	} else if (turns <= 8) {
		points += 8
	} else if (turns <= 28) {
		points += 0
	} else if (turns <= 32) {
		points -= 8
	} else {
		points -= 12
	}

	// Effective Attacks
	if (effectiveAttacks <= 1) {
		points += 4
	} else if (effectiveAttacks <= 3) {
		points += 2
	} else if (effectiveAttacks <= 9) {
		points += 0
	} else if (effectiveAttacks <= 19) {
		points -= 2
	} else {
		points -= 4
	}

	// Defensive Wins
	if (defensiveWins <= 1) {
		points += 0
	} else if (defensiveWins <= 5) {
		points -= 10
	} else if (defensiveWins <= 9) {
		points -= 20
	} else if (defensiveWins <= 14) {
		points -= 30
	} else {
		points -= 40
	}

	// Face-Down Plays
	if (faceDownPlays == 0) {
		points += 0
	} else if (faceDownPlays <= 10) {
		points -= 2
	} else if (faceDownPlays <= 20) {
		points -= 4
	} else if (faceDownPlays <= 30) {
		points -= 6
	} else {
		points -= 8
	}

	// Innitiate Fusion
	if (innitiateFusion == 0) {
		points += 4
	} else if (innitiateFusion <= 4) {
		points += 0
	} else if (innitiateFusion <= 9) {
		points -= 4
	} else if (innitiateFusion <= 14) {
		points -= 8
	} else {
		points -= 12
	}

	// Equip Magic
	if (equipMagic == 0) {
		points += 4
	} else if (equipMagic <= 4) {
		points += 0
	} else if (equipMagic <= 9) {
		points -= 4
	} else if (equipMagic <= 14) {
		points -= 8
	} else {
		points -= 12
	}

	// Pure Magic
	if (pureMagic == 0) {
		points += 2
	} else if (pureMagic <= 3) {
		points -= 4
	} else if (pureMagic <= 6) {
		points -= 8
	} else if (pureMagic <= 9) {
		points -= 12
	} else {
		points -= 16
	}

	// Trigger Trap
	if (triggerTrap == 0) {
		points += 2
	} else if (triggerTrap <= 2) {
		points -= 8
	} else if (triggerTrap <= 4) {
		points -= 16
	} else if (triggerTrap <= 6) {
		points -= 24
	} else {
		points -= 32
	}

	// Cards Used
	if (cardsUsed <= 8) {
		points += 15
	} else if (cardsUsed <= 12) {
		points += 12
	} else if (cardsUsed <= 32) {
		points += 0
	} else if (cardsUsed <= 36) {
		points -= 5
	} else {
		points -= 7
	}

	// Remaining LP
	if (remainingLp <= 99) {
		points -= 7
	} else if (remainingLp <= 999) {
		points -= 5
	} else if (remainingLp <= 6999) {
		points += 0
	} else if (remainingLp <= 7999) {
		points += 4
	} else {
		points += 6
	}

	// Rank
	if (points <= 9) {
		rank = "S TEC"
	} else if (points <= 19) {
		rank = "A TEC"
	} else if (points <= 29) {
		rank = "B TEC"
	} else if (points <= 39) {
		rank = "C TEC"
	} else if (points <= 49) {
		rank = "D TEC"
	} else if (points <= 59) {
		rank = "D POW"
	} else if (points <= 69) {
		rank = "C POW"
	} else if (points <= 79) {
		rank = "B POW"
	} else if (points <= 89) {
		rank = "A POW"
	} else {
		rank = "S POW"
	}

	result.innerHTML = `<p>${points} points</p><p>${rank}</p>`
}
