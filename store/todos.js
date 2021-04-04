import firebase from '~/plugins/firebase'
import { firestoreAction } from 'vuexfire'

const db = firebase.firestore()
const todoRef = db.collection('todo')

export const state = () => ({
  todos: []
})

export const actions = {
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('todos', todoRef)
  }),
  add: firestoreAction((context, name) => {
    if (name.trim()) {
      todoRef.add({
        name: name,
        done: false,
        created: firebase.firestore.FieldValue.serverTimestamp()
      })
    }
  }),
  remove: firestoreAction((context, id) => {
    todoRef.doc(id).delete()
  }),
  toggle: firestoreAction((context, todo) => {
    todoRef.doc(todo.id).update({
      done: !todo.done
    })
  })
}