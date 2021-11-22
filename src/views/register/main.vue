<template>
    <div class="container pt-5">
        <h1 class="text-center h3 mb-3 fw-normal">REGISTER</h1>
        <form>
            <div class="mb-3">
                <label for="" class="form-label">Nama</label>
                <input type="text" class="form-control" id="" aria-describedby="">
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
                <label for="" class="form-label">HP</label>
                <input type="text" class="form-control" id="" aria-describedby="">
            </div>
            <div class="mb-3">
                <label for="" class="form-label">Alamat</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div class="mb-3">
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="jk" id="rbL">
                    <label class="form-check-label" for="rbL">
                        Laki-laki
                    </label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="jk" id="rbP" checked>
                    <label class="form-check-label" for="rbP">
                        Perempuan
                    </label>
                </div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1">
            </div>
            
            <button type="submit" class="btn btn-success me-1">Register</button>
            <button type="reset" class="btn btn-danger">Reset</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "Register"
}
</script>

<style scoped>
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-floating:focus-within {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>