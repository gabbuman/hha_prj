from backend.models import RehabMonthlyRecord
from rest_framework import serializers
from backend.models import MonthlyRecord

#Monthly Record Serializer
class MonthlyRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = MonthlyRecord
        fields = '__all__'

# Rehab Monthly Record Serializer
class RehabMonthlyRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = RehabMonthlyRecord
        fields = '__all__'