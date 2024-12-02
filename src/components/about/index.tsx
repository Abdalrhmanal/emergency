import React from 'react'

function About() {
    return (
        <div>
            <section className="py-5">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-8">
                            <h2 className="mb-4">عن التطبيق</h2>
                            <p className="lead">
                                تم تصميم هذا التطبيق ليكون وسيلة فعّالة لدعم وخدمة الناس في المناطق التي تحتاج إلى مساعدة إنسانية في ظل الظروف الصعبة التي تمر بها المنطقة نتيجة الحرب الدائرة. يهدف التطبيق إلى تسهيل الوصول إلى الخدمات الأساسية التي تقدمها المنظمات والجمعيات والفرق الإنسانية والتطوعية، بما يضمن تلبية احتياجات الفئات الأكثر احتياجًا.
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-lg-6">
                            <h4 className="mb-3">المناطق التي يخدمها التطبيق</h4>
                            <ul className="list-group" style={{marginTop:'15px'}}>
                                <li className="list-group-item">حلب</li>
                                <li className="list-group-item">إدلب</li>
                                <li className="list-group-item">حماة</li>
                            </ul>
                        </div>
                        <div className="col-lg-6" style={{marginTop:'15px'}}>
                            <h4 className="mb-3">رؤية التطبيق</h4>
                            <p>
                                نسعى من خلال هذا التطبيق إلى أن نكون جسرًا يربط بين مقدمي الخدمات والناس المحتاجين إليها، من أجل تعزيز روح التعاون والتكافل الإنساني في المناطق المتضررة. إنه ليس مجرد تطبيق، بل رسالة إنسانية تهدف إلى تخفيف معاناة المدنيين، ودعم صمودهم في مواجهة التحديات.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About