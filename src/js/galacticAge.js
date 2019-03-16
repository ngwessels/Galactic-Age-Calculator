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
  main() {
    let month = $("input:radio[name=month]:checked").val();
    let day = $("#day").val();
    let year = $("#year").val();
    const d = new Date(month + " " + day + ", " + year + " 00:01:00");
    const years = this.getAge(d);
    console.log(years);
    const mercury = this.mercury(years);
    const venus = this.venus(years);
    const mars = this.mars(years);
    const jupiter = this.jupiter(years);
    const array = [mercury, venus, mars, jupiter];
    return array;

  }
}
