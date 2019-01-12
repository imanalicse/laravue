<template>
    <div>
         <h2>Add New User <small><a href="/users">Users</a></small></h2>

            <form action="/users" method="post" @submit="addNewUser">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" id="name" placeholder="Enter Name" v-model="name">                    
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter Email" v-model="email">
                </div>
                 <div class="form-group">
                    <label for="password">password</label>
                    <input type="password" class="form-control" id="password" placeholder="Enter Password" v-model="password">
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
                model:{}
            }
        },
         mounted() {
            console.log('User component mounted.')
        },
        methods: {
            addNewUser(e) {
            
            e.preventDefault();

                this.model = {
                    name: this.name,
                    email: this.email,
                    password: this.password
                }
                
                console.log(this.model);

                axios.post('/api/users', this.model)
                .then(response => {
                    console.log(response);
                    this.name = '';
                    this.email = '';
                    this.password = '';
                }).catch( err => {
                    console.log(err);
                })

            }
        }    
    }
</script>

