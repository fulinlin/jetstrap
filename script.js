$(function()
{
	var $orders=$('#orders');
	$.ajax({
		type: 'GET',
		url:'http://rest.learncode.academy/api/johnbob/friends',
		
		success: function(data){
			$.each(data, function(i, orders)
			{
				$orders.append("<li>name: " +orders.name  + "drink: " +orders.drink+"</li>");
			});
		},
		error: function(data)
		{
			alert("Alert Loading Orders");
		}
	});
	
	$('#add-order').on('click',function()
	{
		var $name=$('#name');
		var $drink=$('#drink');
		var order=
		{
			name: $name.val(),
			drink: $drink.val(),
		};
		
		$.ajax({
			type:'POST',
			url:'http://rest.learncode.academy/api/johnbob/friends',
			data:order,
			success: function(newOrder)
			{
				$orders.append("<li>name: " + newOrder.name+ ", drink: " + newOrder.drink + "</li>")
			},
			error: function()
			{
				alert("Error Saving Order")
			}
		});
	});
	
	
	
});