from rest_framework import serializers
from backend.models import MonthlyRecord

#Monthly Record Serializer
class MonthlyRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = MonthlyRecord
        fields = '__all__'
        
class NICUPaedsSerializer(serializers.ModelSerializer):
    class Meta:
        model = NICUPaeds
        fields = '__all__'