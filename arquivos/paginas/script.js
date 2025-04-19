function showMonth(monthId) {
    const months = document.querySelectorAll('.month');
    months.forEach(month => {
        month.classList.remove('active');
        month.style.display = 'none';
    });
    const activeMonth = document.getElementById(monthId);
    activeMonth.style.display = 'block';
    setTimeout(() => {
        activeMonth.classList.add('active');
    }, 10);

    // Atualizar os links do menu para mostrar o ativo
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => link.classList.remove('active'));
    document.querySelector(`a[onclick="showMonth('${monthId}')"]`).classList.add('active');
}

// Mostra o primeiro mês por padrão
document.addEventListener("DOMContentLoaded", function() {
    showMonth('janeiro');
});
