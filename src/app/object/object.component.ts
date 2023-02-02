import { Component } from '@angular/core'

@Component({
  selector: 'app-object',
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.css'],
})
export class ObjectComponent {
  person: any = {
    name: 'Владимир',
    patronymic: 'Ильич',
    lastname: 'Ленин',
    age: 52,
    isProgrammer: true,
    languages: ['ru', ' en', ' de'],
    'complex key': 'Complex Value',
    ['key_' + (1 + 3)]: 'Computed Key',
    greet() {
      console.log(`Возраст ${this.lastname}а: ${this.age} года`)
    },
    info() {
      console.info(
        `Инфа про человека: ${this.name} ${this.patronymic} ${this.lastname}`
      )
    },
  }

  ageKey = 'age'
  newAge = this.person[this.ageKey]++
  newLanguages = this.person.languages.push(' by')
  // newKey_4 = delete this.person['key_4'];
  keys = Object.keys(this.person).forEach((key: any) => {
    console.log('key:', key), console.log('value:', this.person[key])
  })
}

const logger = {
  keys() {
    console.log('Object Keys: ', Object.keys(this))
  },

  keysAndValues() {
    Object.keys(this).forEach((key) => {
      console.log(`"${key}": ${[key]}`)
    })
  },
}
// const bound = logger.keys.bind(ObjectComponent.name),
// bound()
logger.keys.call(ObjectComponent)
logger.keysAndValues.call(logger)
