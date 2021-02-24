const getSleepHours = day => {
    switch (day) {
        case 'monday':
            return 8;
        case 'tuesday':
            return 7;
        case 'wednesday':
            return 6;
        case 'thursday':
            return 5;
        case 'friday':
            return 4;
        case 'saturday':
            return 3;
        case 'sunday':
            return 12;
    }
}

const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

const getIdealSleepHours = (idealHours) => idealHours * 7;

const calculateSleepDebt = (idealHours) => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(idealHours);
    if (actualSleepHours === idealSleepHours) {
        return 'You got the perfect amount of sleep';
    } else if (actualSleepHours > idealSleepHours) {
        return `You got more sleep than needed: + ${actualSleepHours - idealSleepHours} hours`;
    } else {
        return `You should get some rest: - ${-(actualSleepHours - idealSleepHours)} hours`;
    }
}

console.log(calculateSleepDebt(7));
