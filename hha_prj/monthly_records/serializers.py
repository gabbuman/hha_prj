from hha_prj.monthly_records.models import RehabMonthlyRecord
from rest_framework import serializers
from monthly_records.models import MonthlyRecord

#Monthly Record Serializer
class MonthlyRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = MonthlyRecord
        fields = '__all__'

class RehabMonthlyRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = RehabMonthlyRecord
        fields = '__all__'