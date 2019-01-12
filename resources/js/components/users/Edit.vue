<template>
    <div>
         <h2>Edit User <small><a href="/users">Users</a></small> </h2> 
            <form action="/users" method="post" @submit="updateUser">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" id="name" placeholder="Enter Name" v-model="name">                    
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter Email" v-model="email">
                </div>               

                 <button type="submit" class="btn btn-primary">Save</button>        
            </form>       
    </div>    
</template>

<script>
    export default {
        props: ['id'],         
        data(){
            return {
                name:'',
                email: ''                                      
            }            
        },
        mounted() {             
            axios.get('/api/users/'+this.id).then(resp => {            
                //console.log(resp);
                this.name = resp.data.name;
                this.email = resp.data.email;                
            }).catch(error => {
                console.log(error);
            })
        },
        methods: {

            updateUser(e) { 

                e.preventDefault();

                var model = {
                    name: this.name,
                    email: this.email                    
                }
                
                console.log(model);

                axios.put('/api/users/'+this.id, model)
                .then(response => {
                    console.log(response);                   
                }).catch( err => {
                    console.log(err);
                })

            }
        }    
    }
</script>

