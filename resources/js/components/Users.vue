<template>

    <div>
    <h2>Users Listing</h2>
    
    <a href="/users/create" class="btn btn-success pull-right mb-2">Add New User</a>  
    
   <table class="table table-striped">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user in users" :key="user.id">
                <td>{{ user.id }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
                <td>
                    <a :href="'/users/'+user.id+'/edit'" class="btn btn-primary">Edit</a>
                    <a href="" class="btn btn-danger">Delete</a>
                </td>
            </tr>                  
        </tbody>
    </table>
    </div>

</template>

<script>
    export default {
        data(){
            return {
                users: [],
                user:{
                    id: 0,
                    name: '',
                    email: ''
                }
            }
        },
         mounted() {
            console.log('User component mounted.')
            this.getUsers();
        },
        methods: {            
            getUsers(){
                axios.get('/api/users')
                .then(response=>{                   
                    this.users = response.data;
                     console.log(this.users);
                })
            }
        }
    }
</script>

<style>

</style>
