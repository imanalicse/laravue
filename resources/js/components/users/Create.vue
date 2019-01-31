<template>
    <div>
         <h2>Add New User <small><a href="/users">Users</a></small></h2>

            <form action="/users" method="post" @submit="addNewUser">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" id="name" placeholder="Enter Name" v-model="name">      
                    <span v-if="errors.name" class="error">{{ errors.name[0] }}</span>              
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter Email" v-model="email">
                    <span v-if="errors.email" class="error">{{ errors.email[0] }}</span>
                </div>
                 <div class="form-group">
                    <label for="password">password</label>
                    <input type="password" class="form-control" id="password" placeholder="Enter Password" v-model="password">
                    <span v-if="errors.password" class="error">{{ errors.password[0] }}</span>
                </div>

                 <button type="submit" class="btn btn-primary">Submit</button>
                
            </form>

    </div>    
</template>

<script>
    export default {
        data(){
            return {
                name:'',
                email: '',
                password: '',
                errors: []
            }
        },
         mounted() {
            console.log('User component mounted.')
        },
        methods: {
            addNewUser(e) {
            this.errors = [];
            e.preventDefault();

                var model = {
                    name: this.name,
                    email: this.email,
                    password: this.password
                }
                
                console.log(model);

                axios.post('/api/users', model)
                .then(response => {
                    console.log(response);
                    console.log('successful');
                    this.name = '';
                    this.email = '';
                    this.password = '';
                    this.$router.push('/users');
                }).catch( error => {
                    console.log('error')
                    console.log(error.response.data);
                    if(error.response.status == 422){
                       this.errors = error.response.data.errors;     
                    }
                })

            }
        }    
    }
</script>

