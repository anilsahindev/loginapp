

### Installation

```sh
$ npm install
```

```sh
$ npm start
```

### Proje Tanımı
Nodejs tabanlı bir proje mvc yapısı olarak express kullandım html şablonlaırnı çıkarmak için handlebars kullandım.front end tarafında sass yazdım bootstrap kullandım bu sırada yazdığım sass ve js dosyaları gulp ile birlikte compile olup min. oluyor.2 sayfamız var bunlardan birincisi login sayfası bu sayfada kullanıcı önüne çıkan form alanında kullanıcı adı şifresini girip sisteme giriş yapıyor, kullanıcının bilgileri mongodb'nin ücretsiz cloud aracı mlab üzerinde tutuluyor ve mongoose ile buradaki bilgiler çekiliyor.form kontrolleri için express-validator kullandım.bütün bu işlemlerden olumlu geçmiş ise kullanıcı 2. sayfamız olan albüm sayfasına yönlendiriliyor ve burada karşımıza menü çıkıyor burada menüde bulunan isimler ``` https://jsonplaceholder.typicode.com/albums```den çekiliyor burada şöyle bir işlem yaptım axios ile bir istek attım daha sonra gelen verileri bir değişkende tuttum ve şablonumda ekrana çıktısını verdim, daha sonra fotoğraflar bölümünde albüm isimlerindeki gibi axios yardımıyla bir istek daha attım ve fotoğraflarıda bir dizide tutup onlarıda şablonumda ekrana çıktısını verdim.
************************************************
Projenin çalışması ve geliştirmeye açık olmasını kullandığım araçlar
Express, web tabanlı bir uygulama geliştirdiğim için işimi oldukça kolaylaştırdır.<br>
Body-parser, Bu modül sayesinde verileri (k.adı ve şifre) server-side tarafından okuyup işlemleri yapıyoruz.<br>
Bootstrap,Bir css frameworkü olan bootstrap bir web sitesi oluşumda kullanacağımız çoğu elementi içerir.<br>
Browser-sync,yaptığımız değişiklikleri otomatik olarak tarayıcıya yanstıtan bir modül.<br>
connect-flash,Yönledirmeler sırasında kullanıcıya mesajlar vermek için kullandığım modül.<br>
handlebars,bir template engine , şablonoluşturmada yardımcı bir modül.
axios, http  isteklerini atmak kullandığım bir modül.<br>
express-validator, form girişlerinin doğruluğunu kontrol etmekte yardımcı olan bir modül.<br>
mongodb, kullanıcı adı ve şifresini bir yerde tutmak için mongo db kullandım.<br>
mongoose, mongodb ile bağlantı kurmaya yarayan bir yardımcı modül.
gulp, temel amaçı yapılan işlemleri optimize etmek.<br>
passport,servera gelen giriş işlemlerinin karşılamak için kullandığım bir modül.<br>