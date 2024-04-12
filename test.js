const footballTeam = {
    teamName: 'Динамо Київ',
    country: 'Україна',
    yearFounded: 1927,
    players: [
        {name: 'Ігор', age: 28},
        {name: 'Василь', age: 25},
        {name: 'Олександр', age: 30},
    ],
    displayTeamInfo() {
        console.log(`Назва команди: ${this.teamName}`);
        console.log(`Країна: ${this.country}`);
        console.log(`Рік заснування: ${this.yearFounded}`);
        console.log('Список гравців:');
        this.players.forEach(player => {
            console.log(`Ім'я: ${player.name}, Вік: ${player.age}`);
        });
    },
    getInfo() {
        Info = "";
        for (let characteristic in this) {
            if (typeof this[characteristic] !== 'function') {
                Info += characteristic + ": " + this[characteristic] + "\n";
            }
        }
        return Info;
    }
}
footballTeam.displayTeamInfo();
console.log();
console.log(footballTeam.getInfo());
