<template>
    <div>
        <!-- <form action="/mail.php" method="post" class="lumex_form" id="ajax_form" @submit.prevent="false">
                 <div><input type="text" name="name" id="f_name" class="form-control" placeholder="Имя"></div>
                 <div><input type="text" id="f_email" name="email" class="form-control" placeholder="Email"></div>
                 <div><input type="text" id="f_phone" name="phone" class="form-control" placeholder="Телефон"></div>
                 <div><textarea type="textarea" id="f_message" class="form-control" placeholder="Сообщение"></textarea></div>
                 <div id="result_form"></div>
                 <button type="submit"  name="send" class="primary_button form_button">
                     <span> Отправить </span> 
                     <svg class="btn_svg">
                         <path d="m14.4 1-.7.7 5 4.8h-18.7v1h18.8l-5.2 5.5.8.7 6.3-6.7z" fill="currentColor"></path>
                     </svg>
                 </button>
        </form> -->
            <form action="/mail" method="post" class="lumex_form" id="ajax_form" @submit.prevent="false">
                 <div><input type="text" name="name" id="f_name" v-model="name" class="form-control" placeholder="Имя"></div>
                 <div><input type="text" id="f_email" v-model="email" name="email" class="form-control" placeholder="Email"></div>
                 <div><input type="text" id="f_phone" v-model="phone" name="phone" class="form-control" placeholder="Телефон"></div>
                 <div><textarea type="textarea" id="f_message" v-model="message"  class="form-control" placeholder="Сообщение"></textarea></div>
                 <div id="result_form"></div>
                 <button type="submit"  name="send" class="primary_button form_button">
                     <span> Отправить </span> 
                     <svg class="btn_svg">
                         <path d="m14.4 1-.7.7 5 4.8h-18.7v1h18.8l-5.2 5.5.8.7 6.3-6.7z" fill="currentColor"></path>
                     </svg>
                 </button>
        </form>
    </div>
</template>


// <script>
// export default {
//     data: () => ({
//         name: '',
//         email: '',
//         phone: '',
//         message: ''
//     }),
//     method: {
//         onSubmit () {
//             const asyncLog = async (asyncLog) => {
//                 try {
//                     const formData = new FormData()

//                     formData.set('name', this.name)
//                     formData.set('email', this.email)
//                     formData.set('phone', this.phone)
//                     formData.set('message', this.message)

//                     await this.$store.dispatch('form/mail', formData)
//                 } catch (e) {
//                     throw e
//                 }
//             }
//              asyncLog()
//              console.log(asyncLog())
//         }
//     }
// }
// </script>