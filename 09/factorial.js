function factorial(num){
		if(num>=1){
			result1 = 1;
			for(i=1;i<=num;i++){
				result1=result1*i;
			}
		}
		
		if(num>=0){
			Math.floor(num);
			result2 = 1;
			for(i=1;i<=num;i++){
				result2=result2*i;
			}
		}
		
		if(num<=0){
			return null;
		}
	}