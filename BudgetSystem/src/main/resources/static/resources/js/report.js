$(document).ready(function() {
	$.ajax({
		type: "GET",
		async: false,
		url : "/service/getdepts",
		success : function(data){
			$.each(data, function(key, val){
				var comp = 0;
				comprow = 0;
				table = "";
				if(val.grouplist.length==0){
					table+='<tr><td >'+val.company.companyname+'</td>';
					table+='<td></td>';
					table+='<td></td><td></td><td></td><td></td><td></td><td></td></tr>';
					$("#dept").append(table);
				}
				else{
					$.each(val.grouplist, function(key1, val1){
						if(val1.deptlist.length==0) comprow+=1;
						else comprow+=val1.deptlist.length;
					})
					$.each(val.grouplist, function(key1, val1){
						if(val1.deptlist.length==0){
							if(comp == 0){
								table+='<tr><td rowspan="'+comprow+'">'+val.company.companyname+'</td>';
								table+='<td></td>';
							}
							table+='<td>'+val1.group.groupcode+'</td>';
							table+='<td></td>';
							table+='<td></td><td></td><td></td><td></td></tr>';
							comp++;
						}else{
							var group = 0;
							$.each(val1.deptlist, function(key2, val2){
								table+='<tr>';
								if(comp == 0){
									table+='<td rowspan="'+comprow+'">'+val.company.companyname+'</td>';
									table+='<td rowspan="'+comprow+'"><input type="checkbox" class="company" data-comp-id="'+val.company.companyid+'"></td>';
								}
								if(group == 0){
									table+='<td rowspan="'+val1.deptlist.length+'">'+val1.group.groupcode+'</td>';
									table+='<td rowspan="'+val1.deptlist.length+'"><input type="checkbox" class="group" data-comp-id="'+val.company.companyid+'" data-group-id="'+val1.group.groupid+'"></td>';
								}
								table+='<td>'+val2.deptname+'</td>';
								table+='<td><input type="checkbox" class="dept" data-comp-id="'+val.company.companyid+'" data-group-id="'+val1.group.groupid+'" data-dept-id="'+val2.deptid+'"></td>';
								table+='</tr>';
								group++;
								comp++;
							})		
						}
					})
					$("#select-dept").append(table);
				}
			});
		},
		error : function(e){
			alert("System error, Please try again!")
			console.log("ERROR : ", e);
		}
	})
	
	$('.company').click (function (){
		var comp = $(this);
		if (comp.is(':checked')){
			$(".group").each(function(){
				if($(this).attr('data-comp-id')==comp.attr("data-comp-id")){
					$(this).prop('checked',true);
					$(this).attr('disabled','disabled');
				}
			})
			$(".dept").each(function(){
				if($(this).attr('data-comp-id')==comp.attr("data-comp-id")){
					$(this).prop('checked',true);
					$(this).attr('disabled','disabled');
				}
			})
		}else{
			$(".group").each(function(){
				if($(this).attr('data-comp-id')==comp.attr("data-comp-id"))
					$(this).prop('checked',false);
					$(this).removeAttr('disabled');
			})
			$(".dept").each(function(){
				if($(this).attr('data-comp-id')==comp.attr("data-comp-id")){
					$(this).prop('checked',false);
					$(this).removeAttr('disabled');
				}
			})
		}
	});
	$('.group').click (function (){
		var group = $(this);
		if (group.is(':checked')){
			$(".dept").each(function(){
				if($(this).attr('data-group-id')==group.attr("data-group-id")){
					$(this).prop('checked',true);
					$(this).attr('disabled','disabled');
				}
			})
		}else{
			$(".dept").each(function(){
				if($(this).attr('data-group-id')==group.attr("data-group-id")){
					$(this).prop('checked',false);
					$(this).removeAttr('disabled');
				}
			})
		}
	});
	
	$('#sponsor').click(function(){
		if($(".dept:checked").length==0){
			alert("No Dept is chosen");
			return false;
		}
		var report_dept = ""; //[0:sponsor/1:control, dept, dept....]
		report_dept+="0,";
		$(".dept:checked").each(function(){
			report_dept+=$(this).attr("data-dept-id")+",";
		})
		$("#dept-string").val(report_dept.substring(0, report_dept.length -1));
		$("#submit-btn").trigger("click");
		$("input[type='checkbox']").prop("checked", false);
		$("input[type='checkbox']").removeAttr('disabled');
	})
	
	$('#control').click(function(){
		if($(".dept:checked").length==0){
			alert("No Dept is chosen");
			return false;
		}
		var report_dept = ""; //[0:sponsor/1:control, dept, dept....]
		report_dept+="1,";
		$(".dept:checked").each(function(){
			report_dept+=$(this).attr("data-dept-id")+",";
		})
		$("#dept-string").val(report_dept.substring(0, report_dept.length -1));
		$("#submit-btn").trigger("click");
		$("input[type='checkbox']").prop("checked", false);
		$("input[type='checkbox']").removeAttr('disabled');
	})
})