

### Installation

```sh
$ npm install
```

```sh
$ npm start
```
### Live Demo
```sh
https://anilsahindev.herokuapp.com
Username:anil
Password:1234
```


### Proje Tanımı
Nodejs tabanlı bir proje mvc yapısı olarak express kullanıldı html şablonları çıkarmak için handlebars kullanıldı.front end tarafında sass yazıldı ve bootstarp kullanıldı bu sırada yazılan sass ve js dosyaları gulp ile birlikte compile edilip min. dosyaları oluşturuldu. Projede 2 sayfa var bunlardan birincisi login sayfası bu sayfada kullanıcı önüne çıkan form alanında kullanıcı adı şifresini girip sisteme giriş yapıyor, kullanıcının bilgileri mongodb'nin cloud aracı mlab üzerinde tutuluyor ve mongoose ile buradaki bilgiler çekiliyor.form kontrolleri için express-validator kullanıldı.bütün bu işlemlerden olumlu geçmiş ise kullanıcı 2. sayfamız olan albüm sayfasına yönlendiriliyor ve burada karşımıza menü çıkıyor burada menüde bulunan isimler ``` https://jsonplaceholder.typicode.com/albums```den çekiliyor burada şöyle bir işlem yapıldı axios ile bir istek atıldı daha sonra gelen verileri bir değişkende tutulup ve şablonlardaki yerini aldı , daha sonra fotoğraflar bölümünde albüm isimlerindeki gibi axios yardımıyla bir istek daha atıldı ve fotoğraflarıda bir dizide tutup onlarda şablondaki yerlerini aldı.
************************************************
Projenin çalışması ve geliştirmeye açık olmasını kullandığım araçlar
- Express, web tabanlı bir uygulama geliştirdiğim için işimi oldukça kolaylaştırdı.<br>
- Body-parser, Bu modül sayesinde verileri (k.adı ve şifre) server-side tarafından okuyup işlemleri yapıyoruz.<br>
- Bootstrap,Bir css frameworkü olan bootstrap bir web sitesi oluşumda kullanacağımız çoğu elementi içerir.<br>
- Browser-sync,yaptığımız değişiklikleri otomatik olarak tarayıcıya yansıtan bir modül.<br>
- Connect-flash,Yönledirmeler sırasında kullanıcıya mesajlar vermek için kullandığım modül.<br>
- Handlebars,bir template engine , şablon oluşturmada yardımcı bir modül.
- Axios, http  isteklerini atmak kullandığım bir modül.<br>
- Express-validator, form girişlerinin doğruluğunu kontrol etmekte yardımcı olan bir modül.<br>
- Mongodb, kullanıcı adı ve şifresini bir yerde tutmak için mongo db kullandım.<br>
- Mongoose, mongodb ile bağlantı kurmaya yarayan bir yardımcı modül.
- Gulp, temel amaçı yapılan işlemleri optimize etmek.<br>
- Passport,servera gelen giriş işlemlerinin karşılamak için kullandığım bir modül.<br>