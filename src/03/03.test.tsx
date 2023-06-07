import {StedentType} from '../02/02';
import {addSkill, doesStudentLiveIN, makeStudentActive} from './03';

let student: StedentType;
beforeEach(() => {
    student = {
        name: 'dima',
        age: 3,
        isActive: false,
        adress: {
            streetTtitle: 'surhanova 2',
            city: {
                title: 'minsk',
                countryTitle: 'belarus',
            }
        },
        technologies: [
            {
                id: 1,
                title: 'HTML'
            },
            {
                id: 2,
                title: 'React '
            },
            {
                id: 3,
                title: 'CSS'
            }
        ]
    }
})

test('new tech skill should be added', () => {
    expect(student.technologies.length).toBe(3)
    const res = addSkill(student, 'JS')
    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe('JS')
    expect(student.technologies[3].id).toBeDefined()
})

test('student should be made active', () => {
    expect(student.isActive).toBe(false)

    makeStudentActive(student)

    expect(student.isActive).toBe(true)

})


test('student lives in city&', () => {


    let result1 = doesStudentLiveIN(student, 'Moscow')
    let result2 = doesStudentLiveIN(student, 'minsk')

    expect(result1).toBe(false)
    expect(result2).toBe(true)

})
