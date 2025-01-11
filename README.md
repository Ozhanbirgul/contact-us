## Contact Page Projesi

Bu proje, bir iletişim sayfası geliştirilmesi amacıyla oluşturulmuştur. Kullanıcıların ad, e-posta ve mesajlarını form üzerinden girebildiği bu proje, React ve modern web teknolojileri kullanılarak hazırlanmıştır.

---

### Proje Özeti

- **ContactForm Bileşeni**: Ana bileşen, iletişim formunun temel yapısını oluşturur.
- **Form İşlemleri**: Kullanıcı tarafından girilen form verileri, `event` nesnesi kullanılarak yakalanır ve konsola yazdırılır.
- **Button Bileşeni**: Projede yeniden kullanılabilir bir buton bileşeni geliştirilmiştir. Bu bileşen, ikon ve metin gibi dinamik içerikleri destekler.
- **CSS Modules**: Projede her bir bileşene özgü stiller oluşturmak için CSS Modules kullanılmıştır, böylece stil çatışmaları önlenmiştir.
- **React Icons**: Projede ikonlar için React Icons kütüphanesi tercih edilmiştir.

---

### Kullanılan Teknolojiler ve Yapılar

1. **React**: Tüm bileşen yapısını oluşturmak için kullanıldı.
2. **CSS Modules**: Bileşen bazlı stil yapısı sağlamak için tercih edildi.
3. **React Icons**: Modern ve çeşitli ikonlar kullanıldı.
4. **Event Handling**: Form işlemleri sırasında kullanıcının girdiği veriler, `onSubmit` olayına bağlanarak yönetildi.

---

### Proje Detayları

#### Form Alanları
- **Name**: Kullanıcının adını girmesi için bir metin alanı.
- **Email**: Kullanıcının e-posta adresini girmesi için bir giriş alanı.
- **Text**: Kullanıcının mesajını yazabileceği bir metin kutusu.

#### Form İşlemleri
Formun `onSubmit` fonksiyonu şu şekilde çalışır:
- Form gönderildiğinde varsayılan davranış olan sayfa yenilenmesi `event.preventDefault()` ile engellenir.
- Form elemanlarının değerleri `event.target` üzerinden alınır.
- Alınan bu değerler konsola yazdırılır.

#### Button Bileşeni
Button bileşeni, şu özellikleri içerir:
- **Dinamik Metin ve İkon**: `text` ve `icon` prop'ları ile buton içeriği değiştirilebilir.
- **Outline ve Primary Stiller**: `isOutline` prop'u ile butonun tarzı belirlenebilir.
- **Tüm Ek Özellikler**: `...rest` kullanılarak butona ekstra özellikler eklenebilir (örneğin `onClick`).

#### Kullanıcı Deneyimi
- Form üzerinde doldurulması gereken üç alan bulunmaktadır (Name, Email, Text).
- Formu göndermek için bir "Submit" butonu bulunur.
- Kullanıcılar, formdaki bilgileri girip gönderdiğinde, bu bilgiler konsola yazdırılır.

---

### Öne Çıkan Özellikler
- **Yeniden Kullanılabilir Bileşenler**: Buton gibi bileşenler, projede farklı yerlerde kolayca kullanılabilir.
- **Modüler Stil Yönetimi**: CSS Modules sayesinde stil çatışmaları önlenir.
- **Dinamik Veri Yönetimi**: Form verileri etkin bir şekilde işlenir ve kontrol edilir.

---


### Geliştirici Notları
Bu proje, başlangıç düzeyindeki React geliştiricileri için faydalı bir iletişim formu oluşturma örneği sunmaktadır. Daha gelişmiş özellikler eklemek için şunlar yapılabilir:
- Form doğrulama eklenmesi.


