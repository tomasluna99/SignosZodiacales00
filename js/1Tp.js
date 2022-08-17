//Para ingresar fecha y mes de nacimiento

function algoritmo()
{
    let dia, mes;
    dia = parseInt (document.formulario1.dia.value);
    mes = parseInt (document.formulario1.mes.value);
    if((dia>=21&&mes==3)||(dia<=20&&mes==4))
    {
        alert('Signo: Aries');
        alert('Tu Horoscopo dice: Si de verdad quieres tomar las decisiones apropiadas para el momento presente, Aries, deja ya atrás desde hoy mismo cosas que sucedieron en el pasado. Avanza con firmeza a diario, convéncete de que el futuro es tuyo. .');
    }
    if((dia>=24&&mes==9)||(dia<=23&&mes==10))
    {
        alert('Signo: Libra');
        alert('Tu Horoscopo dice: Tienes muchas cosas y muy buenas por hacer, Libra, no puedes perder el tiempo atendiendo a diario las tonterías de una persona que no te aporta nada positivo. Si hoy te viene con algún cuento chino o te critica por algo, no le hagas ningún caso.');
    }
    if((dia>=21&&mes==4)||(dia<=21&&mes==5))
    {
        alert('Signo: Tauro');
        alert('Tu Horoscopo dice: Se están abriendo nuevos caminos en tu horizonte, Tauro, y hoy te darás cuenta de las numerosas oportunidades que tienes para alcanzar lo que has soñado a diario.');
    }
    if((dia>=24&&mes==10)||(dia<=22&&mes==11))
    {
        alert('Signo: Escorpio');
        alert('Tu Horoscopo dice: Tienes hoy un subidón de energía, Escorpio, y buena falta te estaba haciendo porque últimamente estabas a diario hecha unos zorros. No seas tan hipocondríaca porque ahora puedes comprobar que en tu organismo todo marcha como una seda y que tus malestares son imaginarios.');
    }
    if((dia>=22&&mes==5)||(dia<=21&&mes==6))
    {
        alert('Signo: Geminis');
        alert('Tu Horoscopo dice: Gran momento para todo aquello que esté encaminado a hacer crecer tu dinero, Géminis. Estarás hoy especialmente inspirada para acertar en las inversiones, en los negocios y tratos.');
    }
    if((dia>=23&&mes==11)||(dia<=21&&mes==12))
    {
        alert('Signo: Sagitario');
        alert('Tu Horoscopo dice: Existe un riesgo de error en el trabajo en el día de hoy, Sagitario. Presta toda la atención posible para que no tengas que repetir algo que te ha costado lo tuyo de terminar. Aunque el tema sentimental te ocupe la mente a diario, procura no perder la concentración.');
    }
    if((dia>=21&&mes==6)||(dia<=23&&mes==7))
    {
        alert('Signo: Cancer');
        alert('Tu Horoscopo dice: Estos sentimientos de culpa que te invaden a diario, Cáncer, te hacen cometer errores. En estos momentos reúnes todos los requisitos para triunfar y no has de permitir que tus fantasmas del pasado se interpongan en este camino de éxito.');
    }
    if((dia>=22&&mes==12)||(dia<=20&&mes==1))
    {
        alert('Signo: Capricornio');
        alert('Tu Horoscopo dice: Algo que habías previsto que sucediera de una forma puede resultar de otra manera completamente opuesta, Capricornio. Es decir, hoy te puede salir el tiro por la culata en algo que deseabas conseguir y en lo que has puesto muchos esfuerzos a diario.');
    }
    if((dia>=24&&mes==7)||(dia<=23&&mes==8))
    {
        alert('Signo: Leo');
        alert('Tu Horoscopo dice: Sigue hoy los dictados de tu voz interior mucho más de lo que lo estás haciendo ahora, Leo. No te tomes las normas de manera tan estricta como lo vienes haciendo a diario.');
    }
    if((dia>=21&&mes==1)||(dia<=19&&mes==2))
    {
        alert('Signo: Acuario');
        alert('Tu Horoscopo dice: Para volver a sentirte bien, Acuario, necesitas hablar hoy con alguien que te sepa escuchar y darte un buen consejo sobre este tema que te tiene tan preocupada a diario.');
    }
    if((dia>=24&&mes==8)||(dia<=23&&mes==9))
    {
        alert('Signo: Virgo');
        alert('Tu Horoscopo dice: Estarás hoy especialmente inspirada, Virgo, por eso será un buen día para dejar libre tu imaginación. Se te llenará la mente de ideas y proyectos sobre los que tendrás que reflexionar a diario, pero que te pueden generar buenos ingresos y además quizá un nuevo modelo de negocio.');
    }
    if((dia>=20&&mes==2)||(dia<=20&&mes==3))
    {
        alert('Signo: Piscis');
        alert('Tu Horoscopo dice: Hoy por fin te sentirás valorada en el trabajo, Piscis. Recibirás comentarios positivos y felicitaciones por alguna acción que has realizado recientemente. Estás en un buen momento en general y empiezas a apreciar a diario las cosas realmente importantes de la vida.');
    }
}

