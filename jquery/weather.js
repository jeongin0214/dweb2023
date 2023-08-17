		var url = 'http://api.openweathermap.org/data/2.5/weather?q=seoul&APPID=e11462160015cffa69954c9f67741b7b';

		// �ε� �̹��� ǥ��
		$('#weather_info .load_img').show();

		$.getJSON(url, function(data){

			// ���� ������ ��ü
			var sys = data.sys; 			// ������, ����/�ϸ�			
			var city = data.name; 			// ���ø�
			var weather = data.weather; 	// ���� ��ü
			var main = data.main;  			// �µ� ��� ���� ��ü
	 
			var wmain = weather[0].main; 	// ���� ����(Cloudiness)
			var w_id = weather[0].id; 		// �������� id �ڵ�
			var icon = weather[0].icon;		// ���� ������ ����
			var country = sys.country;  	// ������
			var temp = main.temp; 			// ���� �µ�
			var temp_min = main.temp_min 	// ���� �µ�
			var temp_max = main.temp_max 	// �ְ� �µ�

			// ���� ������
			var icon_url = 'http://openweathermap.org/img/w/' + icon;
      
			// ���� ���� ǥ��
			$('#weather_info > .city').html(city + "/" + country);			
			$('#weather_info  .icon').html("<img src='" + icon_url + ".png'>");
			$('#weather_info .w_id').html(wmain);
			$('#weather_info .temp_min').html(parseInt(temp_min-273.15) + '&deg;' + ' min');
			$('#weather_info .temp_max').html( parseInt(temp_max-273.15) + '&deg;' + ' max');
			$('#weather_info  .temp').html(parseInt(temp-273.15) + '&deg;');

	

		})	
  			

