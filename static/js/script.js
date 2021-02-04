$(document).ready(function () {
    $('.sidenav').sidenav({ edge: "right", draggable: true });
    $('.collapsible.expandable').collapsible({ accordion: false });
    $('.tooltipped').tooltip();
    $('select').formSelect();
    $('.datepicker').datepicker({
        format: "dd mmmmm, yyyy", 
        yearRange: 3,
        showClearBtn: true, 
        i18n: { 
            done: "Select" } });
});