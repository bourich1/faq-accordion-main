const btnShow = document.querySelectorAll(".showbtn");
const btnHide = document.querySelectorAll(".hide");
const paragraph = document.querySelectorAll(".solvin");

btnShow.forEach(btn => {
    btn.addEventListener("click", () => {
        // إخفاء جميع الأجوبة والأزرار أولاً
        btnShow.forEach(b => {
            b.classList.remove("hide");
            b.classList.add("show");
        });

        btnHide.forEach(b => {
            b.classList.add("hide");
            b.classList.remove("show");
        });

        paragraph.forEach(p => {
            p.classList.add("hide");
            p.classList.remove("show");
        });
        // إظهار الجواب المطلوب وزر الإخفاء المقابل
        btn.classList.add("hide"); // إخفاء زر العرض الحالي
        btn.classList.remove("show");

        btnHide.forEach(element => {
            if (btn.dataset.show == element.dataset.show) {
                element.classList.add("show");
                element.classList.remove("hide");
                paragraph.forEach(p => {
                    if (btn.dataset.show == p.dataset.show) {
                        p.classList.remove("hide");
                        p.classList.add("show");
                    }
                });
            }
        });
    });
});

btnHide.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.add("hide"); // إخفاء زر الإخفاء الحالي
        btn.classList.remove("show");

        btnShow.forEach(element => {
            if (btn.dataset.show == element.dataset.show) {
                element.classList.add("show");
                element.classList.remove("hide");
                paragraph.forEach(p => {
                    if (btn.dataset.show == p.dataset.show) {
                        p.classList.remove("show");
                        p.classList.add("hide");
                    }
                });
            }
        });
    });
});
