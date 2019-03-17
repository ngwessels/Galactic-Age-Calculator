import $ from 'jquery';
export class Age {
  mercury(earth) {
    let age = earth * (1 / 0.24);
    age = Math.round(age);
    return age;
  }
  venus(earth) {
    let age = earth * (1 / 0.62);
    age = Math.round(age);
    return age;
  }
  mars(earth) {
    let age = earth * (1 / 1.88);
    age = Math.round(age);
    return age;
  }
  jupiter(earth) {
    let age = earth * (1 / 11.86);
    age = Math.round(age);
    return age;
  }




  getAge(d) {
    let currentDate = Date.now();
    const age = d.getTime();
    let time = currentDate - age;
    let years = time / 31556952000;
    years = Math.round(years);
    return years;
  }

  death(array, lifeEx) {

    const mercDeath = this.mercury(lifeEx);
    const venusDeath = this.venus(lifeEx);
    const marsDeath = this.mars(lifeEx);
    const jupiterDeath = this.jupiter(lifeEx);
    return [(mercDeath - array[0]), (venusDeath - array[1]), (marsDeath - array[2]), (jupiterDeath - array[3])];

  }


  report(array) {
    const planets = ["Mercury", "Venus", "Mars", "Jupiter"];
    let p = 0;
    let e = 4;
    let string = "";
    for(let i = 4; i < array.length; i++) {
      if (array[i] > 0) {
        string = string + " Your Life expectancy on " + planets[p] + " is " + array[i] + " more years.";
      } else {
        let age = array[i];
        age = -age;
        string = string + " You are over the average life expectancy on " + planets[p] + " You are " + age + " years over the average age."
      }
      p += 1;
    }
    return string;
  }


  main() {
    let month = $("input:radio[name=month]:checked").val();
    let day = $("#day").val();
    let year = $("#year").val();
    const toLive = $("#leftToLive").val();
    const d = new Date(month + " " + day + ", " + year + " 00:01:00");
    const years = this.getAge(d);
    console.log(years);
    const mercury = this.mercury(years);
    const venus = this.venus(years);
    const mars = this.mars(years);
    const jupiter = this.jupiter(years);
    let array = [mercury, venus, mars, jupiter];
    const deaths = this.death(array, toLive);
    const length = deaths.length;
    for(let i = 0; i < length; i++) {
      array.push(deaths[i]);
    }
    console.log(array);
    const report = this.report(array);
    return report;
  }
}
