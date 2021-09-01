<template>
    <div>
        <form action="/mail.php" method="post" class="lumex_form" id="ajax_form">
                 <div><input type="text" name="name" id="f_name" class="form-control" v-bind:placeholder="$t('contact_page6')"></div>
                 <div><input type="text" id="f_email" name="email" class="form-control" placeholder="Email"></div>
                 <div><input type="text" id="f_phone" name="phone" class="form-control" placeholder="Телефон"></div>
                 <div><textarea type="textarea" id="f_message" name="message" class="form-control"  v-bind:placeholder="$t('contact_page7')"></textarea></div>
                 <div id="result_form"></div>
                 <button type="submit"  name="send" class="primary_button form_button">
                     <span> {{$t('contact_page5')}} </span> 
                     <svg class="btn_svg">
                         <path d="m14.4 1-.7.7 5 4.8h-18.7v1h18.8l-5.2 5.5.8.7 6.3-6.7z" fill="currentColor"></path>
                     </svg>
                 </button>
        </form>
        <!-- <form method="post" class="lumex_form" id="ajax_form" v-on:submit.prevent="onSubmit" noaction="mail.php">
                 <div><input type="text" name="name" id="f_name" v-model="name" class="form-control" placeholder="Имя"></div>
                 <div><input type="text" id="f_email" v-model="email" name="email" class="form-control" placeholder="Email"></div>
                 <div><input type="text" id="f_phone" v-model="phone" name="phone" class="form-control" placeholder="Телефон"></div>
                 <div><textarea type="textarea" id="f_message" v-model="message"  name="message" class="form-control" placeholder="Сообщение"></textarea></div>
                 <div id="result_form"></div>
                 <button type="submit"  name="send" class="primary_button form_button">
                     <span> Отправить </span> 
                     <svg class="btn_svg">
                         <path d="m14.4 1-.7.7 5 4.8h-18.7v1h18.8l-5.2 5.5.8.7 6.3-6.7z" fill="currentColor"></path>
                     </svg>
                 </button>
        </form> -->
    </div>
</template>


<script>

export default {
     head: {
      script: [
        {
          src:
            'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js'
        }
      ]
    },
    // data: () => ({
    //     name: '',
    //     email: '',
    //     phone: '',
    //     message: ''
    // }),
//     methods: {
//         onSubmit () {
//             // const asyncLog = async (asyncLog) => {
//             //     try {
//             //         const formData = new FormData()

//             //         formData.set('name', this.name)
//             //         formData.set('email', this.email)
//             //         formData.set('phone', this.phone)
//             //         formData.set('message', this.message)

//             //         // await this.$store.dispatch('mail.php', formData)
//             //         await this.$axios.post('mail.php', formData)
//             //     } catch (e) {
//             //         throw e
//             //     }
//             // }
//             //  asyncLog()
//             //  console.log(asyncLog())


//             //2 

//             // let formData = {
//             //     name: this.name,
//             //     email: this.email,
//             //     phone: this.phone,
//             //     message: this.message
//             // };
//             // axios.post(`/server/api/mail`, formData);
            
            
//     }
// }

    mounted () {
        $("#ajax_form").submit(function(e) {
            e.preventDefault();
            const str = $(this).serialize();

        $.ajax({
            type: "POST",
            url: "/mail.php",
            data: str,
            dataType: 'json',
            success: function(response) {
                var result;
                if (response.status == 'success') {
                $("#f_name").val('');
                $("#f_phone").val('');
                $("#f_email").val('');
                $("#f_message").val('');
                $('#result_form').html('Спасибо, '+response.message);
                } else {
                $('#result_form').html('Ошибка: '+response.message)
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                $('#result_form').html('Ошибка: '+errorThrown + ' (' + textStatus + ')');
            }

        });
        return false;
        e.preventDefault();
    });
    }
}
</script>